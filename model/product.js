const productsPage=
{
    fakeDB:[],
    init()
    {
        this.fakeDB.push({
            //img: `sayuri.png`,
            title:'Sansevieria Sayuri',
            description:`Succelents`,
            price:`29.99`});
    
         this. fakeDB.push({
            //img: `aqChoco.png`,
            title:`Aglaonema Chocolate`,
            description:`Aglaonema`,
            price:`39.99`});
    
        this.fakeDB.push({
            //img: `hoyaMac.png`,
            title:'Hoy Macrophylla',
            description:`Flowering`,
            price:`43.99`});

        this.fakeDB.push({
            //img: `jgdt.png`,
            title:'Jasmine Grand Duke of Tuscany',
            description:`Flowering`,
            price:`75.00`});
    
         this. fakeDB.push({
            //img: `bonMini3.png`,
            title:`Bonsai Mini 3`,
            description:`Bonsai`,
            price:`25.00`});
    
        this.fakeDB.push({
            //img: `bonJun.png`,
            title:'Bonsai Juniper',
            description:`Bonsai`,
            price:`32.99`});   },
    getAllProducts()
    {
        return this.fakeDB;
    }
}

productsPage.init();
module.exports=productsPage;