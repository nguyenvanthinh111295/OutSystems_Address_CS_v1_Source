/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OutSystems.RuntimeCommon {
    public class ConfigurationParameter {

        private const String SEPARATOR = ".";

        // Mandatory attributes
        protected String OwnerIdentifier;
        protected String Name;

        // Additional attributes that hold meta-information about the ConfigurationParameter
        protected bool NodeConfiguration = true;
        protected bool EncryptedConfiguration = false;

        /**
         * The default value that should be returned if the ConfigurationParameter is not defined
         */
        public String DefaultValue {
            get;
            protected set;
        }

        protected ConfigurationParameter(String ownerIdentifier, String name) {
            this.OwnerIdentifier = ownerIdentifier;
            this.Name = name;
        }

        public static ConfigurationParameter Create(String ownerIdentifier, String name) {
            if (StringUtils.IsEmpty(ownerIdentifier)) {
                throw new ArgumentException("OwnerIdentifier must not be empty.");
            }

            return new ConfigurationParameter(ownerIdentifier, name);
        }

        /**
         * If this parameter is not node-specific, then it is shared among all nodes
         */
        public ConfigurationParameter Shared() {
            this.NodeConfiguration = false;
            return this;
        }

        /**
         * If this parameter requires encryption when it is stored (eg. passwords)
         */ 
        public ConfigurationParameter Encrypted() {
            this.EncryptedConfiguration = true;
            return this;
        }

        /**
         * Default value that will be returned when somebody asks for the parameter and it is not defined
         */
        public ConfigurationParameter WithDefaultValue(String defaultValue) {
            this.DefaultValue = defaultValue;
            return this;
        }

        /**
         * Default value that will be returned when somebody asks for the parameter and it is not defined
         */
        public ConfigurationParameter WithDefaultValue(int defaultValue) {
            this.DefaultValue = Convert.ToString(defaultValue);
            return this;
        }

        /**
         * Default value that will be returned when somebody asks for the parameter and it is not defined
         */
        public ConfigurationParameter WithDefaultValue(bool defaultValue) {
            this.DefaultValue = Convert.ToString(defaultValue);
            return this;
        }

        internal static ConfigurationParameter CreateConfigurationParameter(String name) {
            // Passing ownerIdentifier = "" means that this ConfigurationParameter is owned by the platform, so does not have prefix
            return new ConfigurationParameter("", name);
        }

        public String GetUniqueName() {
            return (StringUtils.IsEmpty(this.OwnerIdentifier) ? this.Name : this.OwnerIdentifier + SEPARATOR + this.Name);
        }

        public bool IsNodeConfiguration() {
            return this.NodeConfiguration;
        }

        public bool IsEncryptedConfiguration() {
            return this.EncryptedConfiguration;
        }

        public override bool Equals(object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || GetType() != obj.GetType()) {
                return false;
            }

		    ConfigurationParameter other = (ConfigurationParameter) obj;
            if ((GetUniqueName() == null && other.GetUniqueName() != null) ||
                !GetUniqueName().Equals(other.GetUniqueName())) {
                return false;
            }
		    return true;
        }

        // generating an hash using prime numbers, as in cryptography best practices
        public override int GetHashCode() {
            const int prime = 31;
		    int result = 1;
            result = prime * result + ((GetUniqueName() == null) ? 0 : GetUniqueName().Trim().GetHashCode());
		    return result;
        }
    }
}
