var checkIcon = '<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 48.125C30.2085 48.125 32.8905 47.5915 35.3928 46.555C37.8952 45.5185 40.1689 43.9993 42.0841 42.0841C43.9993 40.1689 45.5185 37.8952 46.555 35.3928C47.5915 32.8905 48.125 30.2085 48.125 27.5C48.125 24.7915 47.5915 22.1095 46.555 19.6072C45.5185 17.1048 43.9993 14.8311 42.0841 12.9159C40.1689 11.0007 37.8952 9.48149 35.3928 8.44498C32.8905 7.40848 30.2085 6.875 27.5 6.875C22.0299 6.875 16.7839 9.04798 12.9159 12.9159C9.04799 16.7839 6.875 22.0299 6.875 27.5C6.875 32.9701 9.04799 38.2161 12.9159 42.0841C16.7839 45.952 22.0299 48.125 27.5 48.125ZM26.9683 35.8417L38.4267 22.0917L34.9067 19.1583L25.0525 30.981L19.9535 25.8798L16.7131 29.1202L23.5881 35.9952L25.3619 37.769L26.9683 35.8417Z" fill="#61EC1F"/></svg>'

var alertIcon = '<svg width="55" height="55" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_717_4)"><path d="M28.6742 0.843224L50.1077 37.9682C50.3052 38.3103 50.4091 38.6983 50.4091 39.0932C50.4091 39.4882 50.3052 39.8762 50.1077 40.2182C49.9102 40.5602 49.6262 40.8443 49.2842 41.0418C48.9421 41.2392 48.5541 41.3432 48.1592 41.3432H5.29219C4.89724 41.3432 4.50925 41.2392 4.16721 41.0418C3.82518 40.8443 3.54115 40.5602 3.34368 40.2182C3.14621 39.8762 3.04225 39.4882 3.04225 39.0932C3.04225 38.6983 3.14622 38.3103 3.34369 37.9682L24.7772 0.843224C24.9747 0.501207 25.2587 0.217197 25.6007 0.0197366C25.9428 -0.177724 26.3308 -0.281677 26.7257 -0.281677C27.1206 -0.281677 27.5086 -0.177724 27.8506 0.0197366C28.1927 0.217197 28.4767 0.501207 28.6742 0.843224ZM24.4757 30.0932V34.5932H28.9757V30.0932H24.4757ZM24.4757 14.3432V25.5932H28.9757V14.3432H24.4757Z" fill="#EC9A1F"/></g><defs><clipPath id="clip0_717_4"><rect width="54" height="42" fill="white"/></clipPath></defs></svg>'

var errorIcon = '<svg width="55" height="55" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 33.2917C24.0549 33.2917 24.5203 33.1037 24.8963 32.7277C25.2723 32.3517 25.4596 31.8869 25.4583 31.3333C25.4583 30.7785 25.2703 30.3137 24.8943 29.939C24.5183 29.5643 24.0536 29.3763 23.5 29.375C22.9451 29.375 22.4804 29.563 22.1057 29.939C21.731 30.315 21.543 30.7798 21.5417 31.3333C21.5417 31.8882 21.7297 32.3536 22.1057 32.7296C22.4817 33.1056 22.9464 33.293 23.5 33.2917ZM21.5417 25.4583H25.4583V13.7083H21.5417V25.4583ZM23.5 43.0833C20.791 43.0833 18.2451 42.5689 15.8625 41.5402C13.4799 40.5114 11.4073 39.1164 9.6448 37.3552C7.8823 35.5927 6.48731 33.5201 5.45984 31.1375C4.43237 28.7549 3.91798 26.209 3.91667 23.5C3.91667 20.791 4.43106 18.2451 5.45984 15.8625C6.48862 13.4799 7.8836 11.4073 9.6448 9.64478C11.4073 7.88228 13.4799 6.4873 15.8625 5.45982C18.2451 4.43235 20.791 3.91796 23.5 3.91666C26.209 3.91666 28.7549 4.43105 31.1375 5.45982C33.5201 6.4886 35.5927 7.88359 37.3552 9.64478C39.1177 11.4073 40.5134 13.4799 41.5421 15.8625C42.5709 18.2451 43.0846 20.791 43.0833 23.5C43.0833 26.209 42.569 28.7549 41.5402 31.1375C40.5114 33.5201 39.1164 35.5927 37.3552 37.3552C35.5927 39.1177 33.5201 40.5133 31.1375 41.5421C28.7549 42.5709 26.209 43.0846 23.5 43.0833Z" fill="#EC1F1F"/></svg>'
            
document.addEventListener("DOMContentLoaded", function () {
    function display(bool) {
        if (bool) {
            document.getElementById("body").style.display = "block";
        } else {
            document.getElementById("body").style.display = "none";
        }
    }

    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
                if (item.alertinfo.type == "check") {
                    $("#lateralcolor").css("background-color", "#61EC1F")
                    $("#main").css("background-image", "linear-gradient(to top right, #56fb2d67, #3f3f46)")
                    $("#title").css("color", "#61EC1F")
                    $("#icon").html(checkIcon)
                } else if (item.alertinfo.type == "alert") {
                    $("#lateralcolor").css("background-color", "#EC9A1F")
                    $("#main").css("background-image", "linear-gradient(to top right, #fbbd2d67, #3f3f46)")
                    $("#icon").html(alertIcon)
                    $("#title").css("color", "#EC9A1F")
                } else if (item.alertinfo.type == "error") {
                    $("#lateralcolor").css("background-color", "#EC1F1F")
                    $("#main").css("background-image", "linear-gradient(to top right, #fb2d2d67, #3f3f46)")
                    $("#title").css("color", "#EC1F1F")
                    $("#icon").html(errorIcon)
                }
                $("#title").text(item.alertinfo.title)
                $("#text").text(item.alertinfo.message)
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('https://bit-alerts/exit', JSON.stringify({}));
            return
        }
    };
});