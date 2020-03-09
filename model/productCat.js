const productsCat=
{
    fakeDB2:[],
    init()
    {
        this.fakeDB2.push({
            category:`Succelents`,
            img: `sayuri.png`
        });
    
        this. fakeDB2.push({
            category:`Aglaonema`,
            img: `aqChoco.png`
        });
    
        this.fakeDB2.push({
            category:`Flowering`,
            img: `hoyaMac.png`
        });
        
        this.fakeDB2.push({
            category:`Bonsai`,
            img: `bonJun.png`
        });   
    },
    getProductsCat()
    {
        return this.fakeDB2;
    }
}

productsCat.init();
module.exports=productsCat;