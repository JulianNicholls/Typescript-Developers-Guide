import { Collection } from '../models/Collection';

export abstract class CollectionView<T, PropsType> {
  constructor(public parent: Element, protected collection: Collection<T, PropsType>) { }

  render(): void {
    const element = document.createElement('template');

    this.collection.models.forEach(model => {
      const wrapper = document.createElement('div');
      this.renderItem(model, wrapper);
      element.content.append(wrapper);
    });

    // Clear and refill the parent
    this.parent.innerHTML = '';
    this.parent.append(element.content);
  }

  abstract renderItem(model: T, itemParent: Element): void;
}
