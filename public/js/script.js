$(document).ready(function(){
    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        var burger_id = $(this).children("burger_id").val();
        console.log(burger_id);

        $.ajax({
            method: "PUT",
            url: "mysql://wf6o65bow2l2b1ub:g0euw4tueap42pae@ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qua8r8v0v2ap0um8" + burger_id,
        }).then(function(_data){
            location.reload();
        });
    });
});