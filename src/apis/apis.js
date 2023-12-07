import {GET, POST} from "./httpService.js";

/**
 * 所有接口的调用入口
 *
 * 使用: Apis.getInstance.xxx()
 */
export const Apis = (function () {

    let instance;

    function init() {
        return {

            /**
             * 获取所有热点平台
             */
            hotspotPlatforms() {
                return GET("/hotspot/platforms")
            },

            /**
             * 根据平台获取最新热点信息
             *
             * @param platform
             */
            hotspotInfo(platform) {
                return POST("/hotspot/newest", {platform: platform})
            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
})()