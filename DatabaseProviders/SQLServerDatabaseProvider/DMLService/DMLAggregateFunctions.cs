/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.DMLService;

namespace OutSystems.HubEdition.DatabaseProvider.SqlServer.DMLService {
    internal class DMLAggregateFunctions : BaseDMLAggregateFunctions {

        internal DMLAggregateFunctions(IDMLService dmlService) : base(dmlService) { }

        public override string Avg(string n) {
            return string.Format("Avg(convert(decimal(" + DMLConstants.SQL_DIM_TO_DEC + "), {0}))", n);
        }

    }
}
