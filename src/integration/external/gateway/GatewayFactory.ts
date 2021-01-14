import GatewayEnum from '../../../entity/domain/GatewayEnum'
import BaseGatewayFactory from './BaseGatewayFactory'
import BraspagGatewayService from './Braspag/BraspagGatewayService'
import IGateway from './IGateway'

class GatewayFactory implements BaseGatewayFactory {
  constructor(private braspag: BraspagGatewayService) {}

  createGateway(type: GatewayEnum): IGateway<any> {
    switch (type) {
      case GatewayEnum.BRASPAG:
        return this.braspag
      default:
        return null
    }
  }
}

export default GatewayFactory
