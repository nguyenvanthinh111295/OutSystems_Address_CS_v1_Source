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

namespace OutSystems.HubEdition.DatabaseProvider.Oracle.DMLService {
    public class DMLService : BaseDMLService {
        
        private readonly IDMLQueries queries;
        private readonly IDMLIdentifiers identifiers;
        private readonly IDMLOperators operators;
        private readonly IDMLFunctions functions;
        private readonly IDMLAggregateFunctions aggregateFunctions;
        private readonly IDMLDefaultValues defaultValues;
        private readonly IDMLSyntaxHighlightDefinitions syntaxHighlightDefinitions;

        public DMLService(IDatabaseServices databaseServices) : base(databaseServices) {
            queries = new DMLQueries(this);
            identifiers = new DMLIdentifiers(this);
            operators = new DMLOperators(this);
            functions = new DMLFunctions(this);
            aggregateFunctions = new DMLAggregateFunctions(this);
            defaultValues = new DMLDefaultValues(this);
            syntaxHighlightDefinitions = new DMLSyntaxHighlightDefinitions(this);
        }

        public override IDMLQueries Queries {
            get { return queries; }
        }

        public override IDMLEntityActions GetEntityActions(ITableSourceInfo tableSourceInfo) {
            return new DMLEntityActions(this, tableSourceInfo);
        }
        
        public override IDMLIdentifiers Identifiers { get { return identifiers; } }

        public override IDMLOperators Operators { get { return operators; } }

        public override IDMLFunctions Functions { get { return functions; } }

        public override IDMLAggregateFunctions AggregateFunctions { get { return aggregateFunctions; } }

        public override IDMLDefaultValues DefaultValues { get { return defaultValues; } }

        public override IDMLSyntaxHighlightDefinitions SyntaxHighlightDefinitions { get { return syntaxHighlightDefinitions; } }

        public override string TransformDatabaseValue(string value, DBDataType type) {
            return (type == DBDataType.TEXT)? "NVL(" + value + ", ' ')" : base.TransformDatabaseValue(value, type);
        }

        public override string EscapeTextValue(string s) {
            return base.EscapeTextValue(s)
                       .Replace("\r\n", "'|| CHR(13) || CHR(10) ||'")
                       .Replace("\n", "'|| CHR(10) ||'");
        }
    }
}
