'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/bcp-language
 */

/**
 * @readonly
 * @enum {string}
 */
const BCPLanguage = {
    AF_ZA: 'af-ZA',
    AM_ET: 'am-ET',
    HY_AM: 'hy-AM',
    AZ: 'az-AZ',
    ID: 'id-ID',
    MS_MY: 'ms-MY',
    BN_BD: 'bn-BD',
    BN_IN: 'bn-IN',
    CA_ES: 'ca-ES',
    CS_CZ: 'cs-CZ',
    DA_DK: 'da-DK',
    DE: 'de-DE',
    EN_AU: 'en-AU',
    EN_CA: 'en-CA',
    EN_GH: 'en-GH',
    EN_GB: 'en-GB',
    EN_IN: 'en-IN',
    EN_IE: 'en-IE',
    EN_KE: 'en-KE',
    EN_NZ: 'en-NZ',
    EN_NG: 'en-NG',
    EN_PH: 'en-PH',
    EN_ZA: 'en-ZA',
    EN_TZ: 'en-TZ',
    EN_US: 'en-US',
    ES_AR: 'es-AR',
    ES_BO: 'es-BO',
    ES_CL: 'es-CL',
    ES_CO: 'es-CO',
    ES_CR: 'es-CR',
    ES_EC: 'es-EC',
    ES_SV: 'es-SV',
    ES_ES: 'es-ES',
    ES_US: 'es-US',
    ES_GT: 'es-GT',
    ES_HN: 'es-HN',
    ES_MX: 'es-MX',
    ES_NI: 'es-NI',
    ES_PA: 'es-PA',
    ES_PY: 'es-PY',
    ES_PE: 'es-PE',
    ES_PR: 'es-PR',
    ES_DO: 'es-DO',
    ES_UY: 'es-UY',
    ES_VE: 'es-VE',
    EU_ES: 'eu-ES',
    IL_PH: 'il-PH',
    FR_CA: 'fr-CA',
    FR_FR: 'fr-FR',
    GL_ES: 'gl-ES',
    KA_GE: 'ka-GE',
    GU_IN: 'gu-IN',
    HR_HR: 'hr-HR',
    ZU_ZA: 'zu-ZA',
    IS_IS: 'is-IS',
    IT_IT: 'it-IT',
    JV_ID: 'jv-ID',
    KN_IN: 'kn-IN',
    KM_KH: 'km-KH',
    LO_LA: 'lo-LA',
    LV_LV: 'lv-LV',
    LT_LT: 'lt-LT',
    HU_HU: 'hu-HU',
    ML_IN: 'ml-IN',
    MR_IN: 'mr-IN',
    NL_NL: 'nl-NL',
    NE_NP: 'ne-NP',
    NB_NO: 'nb-NO',
    PL_PL: 'pl-PL',
    PT_BR: 'pt-BR',
    PT_PT: 'pt-PT',
    RO_RO: 'ro-RO',
    SI_LK: 'si-LK',
    SK_SK: 'sk-SK',
    SL_SI: 'sl-SI',
    SU_ID: 'su-ID',
    SW_TZ: 'sw-TZ',
    SW_KE: 'sw-KE',
    FI_FI: 'fi-FI',
    SV_SE: 'sv-SE',
    TA_IN: 'ta-IN',
    TA_SG: 'ta-SG',
    TA_LK: 'ta-LK',
    TA_MY: 'ta-MY',
    TE_IN: 'te-IN',
    VI_VN: 'vi-VN',
    TR_TR: 'tr-TR',
    UR_PK: 'ur-PK',
    UR_IN: 'ur-IN',
    EL_GR: 'el-GR',
    BG_BG: 'bg-BG',
    RU_RU: 'ru-RU',
    SR_RS: 'sr-RS',
    UK_UA: 'uk-UA',
    HE_IL: 'he-IL',
    AR_IL: 'ar-IL',
    AR_JO: 'ar-JO',
    AR_AE: 'ar-AE',
    AR_BH: 'ar-BH',
    AR_DZ: 'ar-DZ',
    AR_SA: 'ar-SA',
    AR_IQ: 'ar-IQ',
    AR_KW: 'ar-KW',
    AR_MA: 'ar-MA',
    AR_TN: 'ar-TN',
    AR_OM: 'ar-OM',
    AR_PS: 'ar-PS',
    AR_QA: 'ar-QA',
    AR_LB: 'ar-LB',
    AR_EG: 'ar-EG',
    FA_IR: 'fa-IR',
    HI_IN: 'hi-IN',
    TH_TH: 'th-TH',
    KO_KR: 'ko-KR',
    CMN_HANT_TW: 'cmn-Hant-TW',
    YUE_HANT_HK: 'yue-Hant-HK',
    JA_JP: 'ja-JP',
    CMN_HANS_HK: 'cmn-Hans-HK',
    CMN_HANS_CN: 'cmn-Hans-CN'
};

const reverseMap = utils.reverseMap(BCPLanguage);

BCPLanguage.forValue = function (value) {
    return reverseMap[value];
};

module.exports = BCPLanguage;