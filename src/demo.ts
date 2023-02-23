import { AutocompleteUI, GetAutocompleteResponse } from '@oak-digital/dawa-autocomplete-ts';
import DawaAdresseProvider from './lib/Adresse.service';
import './style.css';

const searchField = document.querySelector<HTMLInputElement>('#dawa-search-field');
const resultList = document.querySelector<HTMLUListElement>('#dawa-result-list');
const selectedArea = document.querySelector<HTMLPreElement>('#dawa-selected');

let selectedItem: GetAutocompleteResponse | null = null;

function setSelectedItem(selected: GetAutocompleteResponse) {
    selectedItem = selected;
    if (searchField) searchField.value = selected.forslagstekst ?? searchField.value;

    if (selectedItem.type === 'adresse') {
        const adresseProvider = new DawaAdresseProvider();

        adresseProvider.getAllAssociatedByID(selectedItem.data.id).then((adresser) => {
            if (selectedArea)
                selectedArea.innerHTML = JSON.stringify(
                    adresser.map((addr) => {
                        return addr.betegnelse;
                    }),
                    null,
                    2
                );
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
