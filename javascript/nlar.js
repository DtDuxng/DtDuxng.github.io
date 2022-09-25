var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "dtdung.ga";
	$scope.job2 = "";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "dangdunglx2k4@gmail.com";
	$scope.contact2 = "facebook.com/dangduxng";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu có thắc mắc về code thì liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Phần Mềm Portable";
	$scope.modal3 = "OneDrive";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/dangduxng";
	$scope.linkzl = "https://pitvn-my.sharepoint.com/:f:/g/personal/dangdunglx2004_pitvn_onmicrosoft_com/EpCjlTnVEARPgDb4ay6PNkUBaLxbJNxXhNeF5OgbFvyyrA?e=Nn60ZW";
	$scope.linksc = "https://pitvn-my.sharepoint.com/personal/dangdunglx2004_pitvn_onmicrosoft_com/_layouts/15/onedrive.aspx";
	$scope.linkgm = "dangdunglx2k4@gmail.com";
	$scope.phonenumber = "0359438636 - Viettel";
	$scope.email = "dangdunglx2k4@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Link OneDrive phần mềm Portable : https://pitvn-my.sharepoint.com/:f:/g/personal/dangdunglx2004_pitvn_onmicrosoft_com/EpCjlTnVEARPgDb4ay6PNkUBaLxbJNxXhNeF5OgbFvyyrA?e=Nn60ZW";
	$scope.contentStory2 = "'https://pitvn-my.sharepoint.com/personal/dangdunglx2004_pitvn_onmicrosoft_com/_layouts/15/onedrive.aspx'		'https://drive.google.com/drive/folders/1xQ29kiDH8ws5Lhf38iXHl136zIZedz2p?usp=sharing'";
	$scope.contentStory3 = "Test thử :ᴠ ";
	$scope.storytitle1 = "Phần Mềm Portable";
	$scope.storytitle2 = "OneDrive-Gdrive Của Tôi";
	$scope.storytitle3 = "TEST";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});