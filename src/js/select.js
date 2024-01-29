class MySelect {
  constructor(select) {
    this.select = select;
    this.options = [...this.select.querySelectorAll('option')];
    this.placeholderText = select.querySelector('option[selected]').innerText || '';
    this.isSearchEnabled = this.select.hasAttribute('data-search');

    this.selectWrapper = document.createElement('div');
    this.titleBlock = document.createElement(`${this.isSearchEnabled ? 'input' : 'div'}`);
    this.dropdown = document.createElement('ul');

    this.items = [];

    this.selectWrapper.classList.add('custom-select');
    this.titleBlock.classList.add('custom-select__title');
    this.dropdown.classList.add('custom-select__dropdown');

    this.titleBlock.addEventListener('click', () => this.selectToggle());

    if (this.isSearchEnabled) {
      this.titleBlock.addEventListener('input', (event) => this.search(event));
    }

    document.addEventListener('click', (event) => {
      if (event.target.closest('.custom-select') === this.selectWrapper) return;
      this.selectClose();
    });
  }

  _buildComponent() {
    this.select.after(this.selectWrapper);
    const searchField = document.createElement('label');
    searchField.classList.add('custom-select__search');
    searchField.append(this.titleBlock);

    if (this.isSearchEnabled) {
      this.titleBlock.setAttribute('placeholder', this.placeholderText);
    } else {
      this.titleBlock.innerText = this.placeholderText;
    }

    this.selectWrapper.appendChild(this.select);
    this.selectWrapper.appendChild(this.isSearchEnabled ? searchField : this.titleBlock);
    this.selectWrapper.appendChild(this.dropdown);
  }

  _createListItem(option) {
    const item = document.createElement('li');
    item.classList.add('custom-select__item');
    item.dataset.value = option.value;
    item.innerHTML = option.innerHTML;
    return item;
  }

  _renderItems(options = this.options) {
    this.dropdown.innerHTML = '';
    this.items = [];
    options.forEach((option) => {
      if (option.hasAttribute('hidden')) return;
      const listItem = this._createListItem(option);
      this.items = [...this.items, listItem];
    });

    this.items.forEach((item) => {
      item.addEventListener('click', (event) => this.onChange(event));
      this.dropdown.appendChild(item);
    });
  }

  selectToggle() {
    this.selectWrapper.classList.toggle('custom-select--active');
  }

  selectOpen() {
    this.selectWrapper.classList.add('custom-select--active');
  }

  selectClose() {
    this.selectWrapper.classList.remove('custom-select--active');
  }

  filteredOptions(text) {
    return this.options.filter((option) => option.innerText.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  init() {
    this._buildComponent();
    this._renderItems();
  }

  search(event) {
    const filteredItems = this.filteredOptions(event.target.value);
    this._renderItems(filteredItems);
  }

  onChange(event) {
    this.select.value = event.target.dataset.value;
    if (this.isSearchEnabled) {
      this.titleBlock.value = event.target.innerText;
    } else {
      this.titleBlock.innerText = event.target.innerText;
    }

    this.selectClose();
    this.select.dispatchEvent(new Event('change', event));
  }
}

export default MySelect;
