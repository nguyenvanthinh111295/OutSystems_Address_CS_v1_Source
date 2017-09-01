/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

namespace OutSystems.RuntimeCommon.Cryptography {
    public class CryptAlgorithmParameters {
        public byte[] Key { get; private set; }
        public byte[] InitializationVector { get; private set; }

        public CryptAlgorithmParameters(byte[] key, byte[] iv) {
            Key = key;
            InitializationVector = iv;
        }
    }
}
