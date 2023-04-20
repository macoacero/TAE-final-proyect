class Welcome {

    get getStartedButton() {
        return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").text("Get Started")');
    }
}

export default new Welcome();