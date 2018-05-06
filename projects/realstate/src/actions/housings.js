import uuid from 'uuid';

export const addHousing = (
    {
        description = '',
        price = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_HOUSING',
    housing: {
        id: uuid(),
        description,
        price,
        createdAt
    }
});