import GatewayEnum from '../../../entity/domain/GatewayEnum'
import IGateway from './IGateway'

interface BaseGatewayFactory {
  createGateway(type: GatewayEnum): IGateway<any>
}

export default BaseGatewayFactory
