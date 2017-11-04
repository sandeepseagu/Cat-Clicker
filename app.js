
var intialcats=[

    {
        clickCount:0,
        name:'Tabby',
        imgSrc:'img/434164568_fea0ad4013_z.jpg',
        imgAttribution:'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        nicknames:['Tippu','Tom']



    },
    {
        clickCount:0,
        name:'Tiger',
        imgSrc:'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        imgAttribution:'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        nicknames:['Tigger']
    }

]








var Cat=function(data){

    this.clickCount = ko.observable(data.clickCount);
    this.name= ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution=ko.observable(data.imgAttribution);

    this.nicknames= ko.observableArray(data.nicknames);

    this.showLevels=ko.computed (function(){
        var clicks=this.clickCount();
        if(clicks<10){

            return 'kitten';
        }
        else if (clicks< 15){
            return 'teen';
        }
        else if(clicks < 20)
        {
            return 'Adult';
        }
        else
        {
            return 'ninja';
        }

    },this);

}

var ViewModel= function () {
    // body...
    var self=this

    this.catList=ko.observableArray([]);
    intialcats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter= function (){
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
    };

    this.changeCat=function(cat){
        self.currentCat(cat);
    }



    }




ko.applyBindings(new ViewModel());