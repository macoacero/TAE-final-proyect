class Menu {


    get mapButton() {
        return $('android=new UiSelector().descriptionContains("Map")');
    }

    get plansButton() {
        return $('android=new UiSelector().descriptionContains("Buy tickets")');
    }

    get hambuegerButton() {
        return $('android=new UiSelector().descriptionContains("More Options")');
    }
}

export default new Menu();