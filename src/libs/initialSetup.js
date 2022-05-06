import Rol from '../model/Rol';

export const createRoles = async () => {
    try {
        const count = await Rol.estimatedDocumentCount();
        if (count > 0) return;
        const values = await Promise.all(
            new Rol({name: 'client'}).save(),
            new Rol({name: 'administrator'}).save(),
            new Rol({name: 'seller'}).save()
        );
        console.log(values);
    } catch (error) {
        console.log(error);
    }
}
