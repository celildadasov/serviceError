function sendContact(){
    var maForm=[]; //Banner hissəsində Make An AppointMent bölməsindəki textarea və inputları özündə birləşdirən massiv 
    var check=false; //Make An Appointment hissəsində inputlarda və textarea'ların boş olub olmamasını yoxlamaq üçün bool tipində dəyişən
    var nameCheck=false;  //Make An Appointment hissəsində name inputunun ad üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var phoneCheck=false; //Make An Appointment hissəsində phone inputunun nömrə üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var emailCheck=false; //Make An Appointment hissəsində email inputunun email üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var notification=document.getElementsByClassName("maNotification")[0].getElementsByTagName("p")[0]; //Make An Appointment hissəsində "GO" buttonuna click etdikdə nəticə görmək üçün tag'a müraciət dəyişəni

    for(var i=0;i<3;i++)
    maForm[i]=document.getElementsByClassName("maInput")[i];

    maForm[maForm.length]=document.getElementsByClassName("maTArea")[0];


    for(var i=0;i<maForm.length;i++){
        if(maForm[i].value.length==0){
            check=true;
        }
    }


    if(check==true){
        notification.innerHTML="please fill all fields" //hər hansı input və ya textarea boş olarsa bu əmr yerinə yetirilir
    }

    else{
        for(var i=0;i<maForm[0].value.length;i++){
            nameCheck=false;
            for(var j=65;j<=90;j++){
                if(maForm[0].value[i]==String.fromCharCode(j) || maForm[0].value[i]==String.fromCharCode(j+32)){
                    nameCheck=true; 
                    break;
                }
            }

            if(nameCheck==false)
            break;
        }

        for(var i=0;i<maForm[1].value.length;i++){
            phoneCheck=false;
            for(var j=48;j<=57;j++){
                if(maForm[1].value[i]==String.fromCharCode(j)){
                    phoneCheck=true;
                    break;
                }
            }
            if(phoneCheck==false)
            break;
        }
        
        for(var i=0;i<maForm[2].value.length;i++){
            if(maForm[2].value[i]=='@'){
                for(var j=i;j<maForm[2].value.length;j++){
                    if(maForm[2].value[j]=='.'){
                        if(maForm[2].value.length-j>2){
                            emailCheck=true;
                        }
                    }
                }
            }
        }

        if(nameCheck==true && phoneCheck==true && emailCheck==true){
            notification.innerHTML="email sent"; //input email üçün uyğun olarsa bu əmr yerinə yetirilir 
        }

        else if(nameCheck==false){
            notification.innerHTML="you have entered an invalid name!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if(phoneCheck==false){
            notification.innerHTML="you have entered an invalid phone number! It must be only numbers!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if(emailCheck==false){
            notification.innerHTML="you have entered an invalid email address!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
    }
}

function navClick(){
    
}