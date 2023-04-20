class Plans {
    get plansList() {
        return $('android=new UiSelector().resourceIdMatches(".*actionSheetListView")');
    }
}

export default new Plans();