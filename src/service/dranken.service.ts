import drankenRepositorie from '../repositories/dranken.repositorie';

class DrankenService {
    
    async findAllDranken() : Promise<any> {
        console.log('findAllDranken');
        const dranken =  await drankenRepositorie.retrieveAll();
        return dranken;
    }
}

export default new DrankenService();