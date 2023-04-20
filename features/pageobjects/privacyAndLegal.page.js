class PrivacyAndLegal {

    get privacyList() {
        return $('android=new UiSelector().resourceIdMatches(".*privacy_and_legal_elements")');
    }
}

export default new PrivacyAndLegal();