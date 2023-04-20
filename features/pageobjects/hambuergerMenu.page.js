class HambuergerMenu {

    get privacyButton() {
        return $('android=new UiSelector().descriptionContains("Privacy")');
    }
}

export default new HambuergerMenu();