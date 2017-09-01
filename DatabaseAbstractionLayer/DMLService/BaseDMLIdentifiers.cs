/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Text;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.Extensibility.Data.DMLService {

    /// <summary>
    /// Implementation of the <see>IDMLIdentifiers</see> interface that defines methods
    /// that help build DML Identifiers for columns, tables, and others.
    /// </summary>
    public abstract class BaseDMLIdentifiers : IDMLIdentifiers {
        
        // No need for secure stuff here
        private static readonly Random random = RandomGenerator.GetRandomGenerator();
        
        protected BaseDMLIdentifiers(IDMLService dmlService) {
            DMLService = dmlService;
        }

        /// <summary>
        /// This property represents the associated <see cref="IDMLService"/>.
        /// </summary>
        public IDMLService DMLService { get; private set; }

        /// <summary>
        /// Gets the maximum length of a simple (not compound) identifier. This value should be the minimum valid
        /// length for any kind of identifier (e.g. table name, parameter name)
        /// </summary>
        public abstract int MaxLength { get; }
        
        /// <summary>
        /// Escapes a simple (not compound) identifier to prevent name clashing with reserved words.
        /// The base implementation escapes the identifier using quotation marks, if it isn't already escaped.
        /// </summary>
        /// <param name="identifierName">Name that identifies a database object.</param>
        /// <returns>An escaped identifier.</returns>
        public virtual string EscapeIdentifier(string identifierName) {
            return string.IsNullOrEmpty(identifierName)
                ? ""
                : string.Format("{0}{1}{2}", (identifierName.StartsWith("\"") ? "" : "\""), identifierName, (identifierName.EndsWith("\"") ? "" : "\""));
        }

        /// <summary>
        /// Returns a name that can be used as a valid identifier (e.g. parameter name, constraint name).
        /// It should contain only valid characters and its length should not exceed the maximum defined in MaxLength.
        /// <para>This implementation escapes the <code>baseName</code> to contain only alphanumeric and '_' characters.
        /// If the <code>baseName</code> exceeds the maximum length, the <code>baseName</code> is truncated
        /// and the last five characters are replaced by random numbers.</para>
        /// </summary>
        /// <param name="baseName">An identifier name.</param>
        /// <param name="truncateUsingRandomDigits">
        /// Indicates if the identifier should be truncated if its length exceeds the <see cref="MaxLength"/>. In this case, 
        /// random digits should be used as a suffix to prevent name clashing.
        /// </param>
        /// <returns>A string representing a valid identifier.</returns>
        public virtual string GetValidIdentifier(string baseName, bool truncateUsingRandomDigits) {
            // We need to replace invalid characters to create a valid constraint name (#23805)
            int len = baseName.Length;
            StringBuilder escapedBaseName = new StringBuilder(len);

            for (int i = 0; i < len; i++) {
                char identifier = baseName[i];
                // We assume the valid constrain names are letters, digits or _
                if (Char.IsLetterOrDigit(identifier) || (identifier == '_')) {
                    escapedBaseName.Append(identifier);
                } else {
                    escapedBaseName.Append('_');
                }
            }

            if (!truncateUsingRandomDigits || escapedBaseName.Length <= MaxLength) {
                return escapedBaseName.ToString();
            }
            escapedBaseName.Length = Math.Max(0, MaxLength - 5);
            return escapedBaseName.Append(String.Format("{0:00000}", random.Next(99999))).ToString();
        }
    }
}
