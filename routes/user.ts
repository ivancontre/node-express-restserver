import { Router } from 'express';
import { deleteUser, getUser, patchUser, postUser, putUser } from '../controllers/user';

const router: Router = Router();

router.get(
    '/',
    getUser
);

router.post(
    '/',
    postUser
);

router.put(
    '/',
    putUser
);

router.delete(
    '/',
    deleteUser
);

router.patch(
    '/',
    patchUser
);

module.exports = router;