const productsBS=
{
    fakeDB3:[],
    init()
    {
        this.fakeDB3.push({
            img: `bonJun.png`,            
            price:`32.99`}); 
        
        this. fakeDB3.push({
            img: `aqChoco.png`,
            price:`39.99`});
    
        this.fakeDB3.push({
            img: `hoyaMac.png`,
            price:`43.99`});

        this.fakeDB3.push({
            img: `jgdt.png`,
            price:`75.00`});            
    },
    getBestseller()
    {
        return this.fakeDB3;
    }
}

productsBS.init();
module.exports=productsBS;