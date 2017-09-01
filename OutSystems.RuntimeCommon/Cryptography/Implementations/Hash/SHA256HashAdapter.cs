/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Security.Cryptography;

namespace OutSystems.RuntimeCommon.Cryptography.Implementations.Hash
{
    // NOTE: This algorithm is FIPS compliant...
    internal sealed class SHA256HashAdapter : DotNetHashGenerator {
        protected override HashAlgorithm HashAlgorithm { get { return new SHA256CryptoServiceProvider(); } }
    }
}