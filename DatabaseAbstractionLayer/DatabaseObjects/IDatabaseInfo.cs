/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;

namespace OutSystems.HubEdition.Extensibility.Data.DatabaseObjects {

    /// <summary>
    /// Contains information about a database.
    /// </summary>
    public interface IDatabaseInfo : IEquatable<IDatabaseInfo> {

        /// <summary>
        /// Name that identifies the database
        /// </summary>
        /// <value>
        /// The identifier of the database.
        /// </value>
        string Identifier { get; }

        /// <summary>
        /// Returns true if both objects represent exactly the same database, or false otherwise.
        /// </summary>
        /// <param name="other">Other database object to compare with</param>
        /// <returns>true if the current object is equal to the other parameter; otherwise, false.</returns>
        new bool Equals(IDatabaseInfo other);
    }
}
