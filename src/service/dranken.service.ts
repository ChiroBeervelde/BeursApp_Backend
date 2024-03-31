import drankenRepositorie from '../repositories/dranken.repositorie';

class DrankenService {
    
    async findAllDranken() : Promise<any> {
        const dranken =  await drankenRepositorie.retrieveAll();
        return dranken;
    }
}

export default new DrankenService();