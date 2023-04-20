class Map {


    get mapContainer() {
        return $('android=new UiSelector().resourceIdMatches(".*map_view_fragment")');
    }

    get categoryTitleButton() {
        return $('android=new UiSelector().resourceIdMatches(".*categoryTitleLayout")');
    }

    get categoryList() {
        return $('android=new UiSelector().resourceIdMatches(".*facilityTypeList")');
    }

    get hotelsItem() {
        return $('android=new UiSelector().descriptionContains("Hotels")');
    }
}

export default new Map();