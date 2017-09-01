/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;

namespace OutSystems.HubEdition.RuntimePlatform.NewRuntime.Authentication {

    public class MobileLoginConfiguration {

        readonly string encryptKey;
        readonly string hmacKey;
        readonly TimeSpan loginCacheTime;
        readonly TimeSpan persistentLoginMaxIdleTime;
        readonly TimeSpan persistentLoginCookieExpiration;
        readonly TimeSpan sessionLoginMaxIdleTime;
        readonly int defaultTenantId;
        
        public MobileLoginConfiguration(
            string encryptKey,
            string hmacKey,
            TimeSpan loginCacheTime,
            TimeSpan persistentLoginMaxIdleTime,
            TimeSpan persistentLoginCookieExpiration,
            TimeSpan sessionLoginMaxIdleTime,
            int defaultTenantId)
        {
            this.encryptKey = encryptKey;
            this.hmacKey = hmacKey;
            this.loginCacheTime = loginCacheTime;
            this.persistentLoginMaxIdleTime = persistentLoginMaxIdleTime;
            this.persistentLoginCookieExpiration = persistentLoginCookieExpiration;
            this.sessionLoginMaxIdleTime = sessionLoginMaxIdleTime;
            this.defaultTenantId = defaultTenantId;
        }

        public string EncryptKey { get { return encryptKey; } }
        public string HMACKey { get { return hmacKey; } }
        public TimeSpan LoginCacheTime { get { return loginCacheTime; } }
        public TimeSpan PersistentLoginMaxIdleTime { get { return persistentLoginMaxIdleTime; } }
        public TimeSpan PersistentLoginCookieExpiration { get { return persistentLoginCookieExpiration; } }
        public TimeSpan SessionLoginMaxIdleTime { get { return sessionLoginMaxIdleTime; } }
        public int DefaultTenantId { get { return defaultTenantId; } }
    }
}
