import { AutocompleteUI, GetAutocompleteResponse } from '@oak-digital/dawa-autocomplete-ts';
import { DawaAPIProvider } from './lib/Dawa.service';
import { DawaAdresse } from './lib/interfaces/adresse.interface';

import './style.css';

const searchField = document.querySelector<HTMLInputElement>('#dawa-search-field');
const resultList = document.querySelector<HTMLUListElement>('#dawa-result-list');

let selectedItem: GetAutocompleteResponse | null = null;

function setSelectedItem(selected: GetAutocompleteResponse) {
    selectedItem = selected;
    if (searchField) searchField.value = selected.forslagstekst ?? searchField.value;

    if (selectedItem.type === 'adresse') {
        const api = new DawaAPIProvider();
        api.get<DawaAdresse>('adresser/' + selectedItem.data.id).then((adresse) => {
            console.table(adresse);
        });
    }
}

if (searchField && resultList) {
    const autocompleteUI = new AutocompleteUI(searchField);
    autocompleteUI.setResultList(resultList);

    autocompleteUI.onSelect = () => {
        const current = autocompleteUI.getController().getSelectedItem();
        if (current) setSelectedItem(current);
    };
}
