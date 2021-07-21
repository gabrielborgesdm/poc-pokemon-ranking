import { NextApiRequest, NextApiResponse } from 'next'
import { storeUser } from '../_app/controller/UserController'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await storeUser(req, res)
}

export default handler
