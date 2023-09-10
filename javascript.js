var myPageIds = ['aboutme', 'myresearch', 'myprojects', 'contactme'];
var isOpen = false;

function sideBar() {
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

const openSidebar = () => {
    isOpen = true;
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sidebar").style.marginLeft = "250px";
    document.getElementById("blur").style.filter = 'blur(2px)';
};

const closeSidebar = () => {
    isOpen = false;
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebar").style.marginLeft = "0";
    document.getElementById("blur").style.filter = 'blur(0px)';
};

function showContent(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
    myPageIds.forEach(pageId => {
        if (pageId !== id) {
            document.getElementById(pageId).style.display = "none";
        }
    });
}
