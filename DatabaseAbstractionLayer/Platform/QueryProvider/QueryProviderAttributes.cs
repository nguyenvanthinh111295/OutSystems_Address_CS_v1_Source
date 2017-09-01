/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.RuntimeCommon;
using System;

namespace OutSystems.HubEdition.Extensibility.Data.Platform.QueryProvider {

    /// <summary>
    /// Indicates that the annotated method should not be discovered for automatic sql syntax tests
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public sealed class DatabaseProviderSpecificImplementationFor: Attribute {

        public DatabaseProviderSpecificImplementationFor(string key) {
            Key = key;
        }

        public string Key { get; private set; }
    }

    /// <summary>
    /// Maps a set of test values to the parameters of a method when calling it in automatic tests
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public sealed class TestSyntaxValues : Attribute {

        /// <summary>
        /// Use this constant in the <see cref="Values"/> to automatically generate the value for the given parameter
        /// </summary>
        public const string AUTO = "%AUTO%";

        /// <summary>
        /// Use this constant in the <see cref="Values"/> to use a null value for the given parameter
        /// </summary>
        public const string NULL = "%NULL%";

        /// <summary>
        /// Values to map to the method's parameters, using the order defined in the method signature. If the method
        /// has more parameters than the number of provider values, the remaining values are auto-generated.
        /// NOTE: use <see cref="TestSyntaxValues.AUTO"/> to indicate that the respective parameter should auto-generated
        /// </summary>
        public string[] Values { get; set; }

        /// <summary>
        /// Similar to <see cref="Values"/>, used to test additional sets of values
        /// </summary>
        public string[] Values2 { get; set; }

        /// <summary>
        /// Similar to <see cref="Values"/>, used to test additional sets of values
        /// </summary>
        public string[] Values3 { get; set; }

        /// <summary>
        /// Similar to <see cref="Values"/>, used to test additional sets of values
        /// </summary>
        public string[] Values4 { get; set; }
    }
    
    /// <summary>
    /// Indicates that the annotated method should not be discovered for automatic sql syntax tests
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public sealed class DoNotTestSyntax : Attribute {
        public DoNotTestSyntax(string reason) {
            this.reason = reason;
        }
        private readonly string reason;

        public string Reason {
            get { return reason; }
        }
    }
}