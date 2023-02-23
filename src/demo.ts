import { AutocompleteUI, GetAutocompleteResponse } from '@oak-digital/dawa-autocomplete-ts';
import DawaAdresseProvider from './lib/Adresse.service';
import DawaAdgangsAdresseProvider from './lib/AdgangsAdresse.service';

import './style.css';
import BBRBygningProvider from './lib/BBRBygning.service';

const searchField = document.querySelector<HTMLInputElement>('#dawa-search-field');
const resultList = document.querySelector<HTMLUListElement>('#dawa-result-list');
const selectedArea = document.querySelector<HTMLPreElement>('#dawa-selected');

let selectedItem: GetAutocompleteResponse | null = null;

function setSelectedItem(selected: GetAutocompleteResponse) {
    selectedItem = selected;
    if (searchField) searchField.value = selected.forslagstekst ?? searchField.value;

    if (selectedItem.type === 'adresse') {
        const adresseProvider = new DawaAdresseProvider();
        const adgangsAdresseProvider = new DawaAdgangsAdresseProvider();
        const bygningProvider = new BBRBygningProvider();

        adresseProvider.getOneByID(selectedItem.data.id).then((adresse) => {
            adgangsAdresseProvider.getOneByIDExtended(adresse.adgangsadresseid).then((adgangsAdresse) => {
                bygningProvider.search({ esrejendomsnr: adgangsAdresse.esrejendomsnr }).then((buildings) => {
                    if (selectedArea) selectedArea.innerHTML = JSON.stringify(buildings, null, 2);
                });
            });
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
