/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.HubEdition.Extensibility.Data.IntrospectionService;

namespace OutSystems.HubEdition.DatabaseProvider.iDB2.DMLService {
    public class iDB2DMLService : BaseDMLService {

        private readonly IDMLQueries queries;
        private readonly IDMLIdentifiers identifiers;
        private readonly IDMLOperators operators;
        private readonly IDMLFunctions functions;
        private readonly IDMLDefaultValues defaultValues;
        private readonly IDMLAggregateFunctions aggregateFunctions;
        private readonly IDMLSyntaxHighlightDefinitions syntaxHighlightDefinitions;

        public iDB2DMLService(IDatabaseServices databaseServices)
            : base(databaseServices) {
            queries = new iDB2DMLQueries(this);
            identifiers = new iDB2DMLIdentifiers(this);
            operators = new iDB2DMLOperators(this);
            functions = new iDB2DMLFunctions(this);
            defaultValues = new iDB2DMLDefaultValues(this);
            aggregateFunctions = new iDB2DMLAggregateFunctions(this);
            syntaxHighlightDefinitions = new iDB2DMLSyntaxHighlightDefinitions(this);
        }

        public override IDMLQueries Queries {
            get { return queries; }
        }

        public override IDMLEntityActions GetEntityActions(ITableSourceInfo tableSourceInfo) {
            return new iDB2DMLEntityActions(this, tableSourceInfo);
        }

        public override IDMLIdentifiers Identifiers { get { return identifiers; } }

        public override IDMLOperators Operators { get { return operators; } }

        public override IDMLFunctions Functions { get { return functions; } }

        public override IDMLDefaultValues DefaultValues { get { return defaultValues; } }

        public override IDMLAggregateFunctions AggregateFunctions { get { return aggregateFunctions; } }

        public override IDMLSyntaxHighlightDefinitions SyntaxHighlightDefinitions { get { return syntaxHighlightDefinitions; } }
    }
}
