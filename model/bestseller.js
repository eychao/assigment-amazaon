const productsBS=
{
    fakeDB3:[],
    init()
    {
        this.fakeDB3.push({
            img: `/img/bonJun.png`,            
            price:`32.99`}); 
        
        this. fakeDB3.push({
            img: `/img/agChoco.png`,
            price:`39.99`});
    
        this.fakeDB3.push({
            img: `/img/hoyaMac.png`,
            price:`43.99`});

        this.fakeDB3.push({
            img: `/img/jgdt.png`,
            price:`75.00`});            
    },
    getBestseller()
    {
        return this.fakeDB3;
    }
}

productsBS.init();
module.exports=productsBS;