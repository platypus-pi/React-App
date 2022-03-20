class Student{
    constructor(name, classList , contactsList, username, password, number){
        this.name = name;
        this.classList = classList;
        this.contactsList = contactsList;
        this.username = username;
        this.password = password;
        this.number = number
        //should be [["",""],["",""],["",""]]
        //elem for displaying
        this.elem = document.createElement('div')
        this.initiateDiv();
    }
    initiateDiv(){
        this.elem.id = this.name;
        this.elem.style = "block";
        for(s2 in contactsList){
            el = document.createElement('p')
            el.innerHTML = s2[0]+" : "+s2[1]
            this.elem.appendChild(el);
        }
    }
}
class Group{
    constructor(name, studentList, subject){
        //name could be number
        if(typeof(name)=="number"){
            this.name = "Group "+name;
        }else{
            this.name = name;
        }
        this.studentList = studentList;
        this.elem = document.createElement("div");
        this.elem.id = subject+this.name;
        this.posting = document.createElement("p");
        this.initPosting();
        this.elem.style = "block";
        for(student in this.studentList){
            this.elem.appendChild(student.elem);
        }
        
    }
    initPosting(){
        this.posting.id = this.elem.id+"posting";
        this.posting.innerHTML = this.name;
        this.elem.appendChild(this.posting);
    }
}
class StudyGroups(){
    constructor(groupList, subject){
        this.subject = subject;
        this.elem = document.createElement("div");
        this.elem.id = subject;
        this.title = document.createElement("p");
        this.initTitle();
        this.elem.appendChild(this.title);
        for(group in groupList){
            this.elem.appendChild(group.elem);
        }

        //default hidden
        this.elem.style = "none";
    }
    initTitle(){
        this.title.id=this.elem.id+"title";
        this.title.innerHTML = this.subject;
    }
    show(){
        this.elem.style = "block";
    }
    hide(){
        this.elem.style = "none";
    }
    addStudent(student){
        if(this.found(student)){
            n = this.groupList.length;
            newgroup = new Group(n+1,[student],this.subject);
            this.groupList.push(newgroup);
            this.elem.appendChild(newgroup.elem);
            console.log("added student "+studnet.name)
        }else{
            console.log(studnet.name+" already in a group");
        }
    }
    found(student){
        f = true
        for(group in this.groupList){
            if(!group.found(student)){
                f = false;
                break;
            }
        }
    }
}