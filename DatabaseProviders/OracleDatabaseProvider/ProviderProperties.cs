/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data;

namespace OutSystems.HubEdition.DatabaseProvider.Oracle {
    internal class ProviderProperties : BaseProviderProperties {

        public ProviderProperties(IDatabaseProvider provider) : base(provider) { }

        public override string DisplayName {
            get { return "Oracle"; }
        }

        public override string DatabaseContainerName { get { return "schema"; } }
        
    }
}
