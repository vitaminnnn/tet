import { BaseClient } from './BaseClient'

export class UserPayments extends BaseClient {
  info = {
    get: (payment_id) =>
      this.createRequest({
        url: `/api/billing/payments/${payment_id}`,
        method: 'get',
      }),
  }
}
