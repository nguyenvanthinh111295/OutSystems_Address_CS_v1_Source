/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

namespace OutSystems.RuntimeCommon.Cryptography.VersionedAlgorithms {
    public abstract class SingletonVersionedEncryptAlgorithm<TAlgorithm>: SingletonVersionedCryptographyAlgorithm<TAlgorithm>, IVersionedEncryptAlgorithm 
            where TAlgorithm: SingletonVersionedEncryptAlgorithm<TAlgorithm>, new() {

        string IVersionedEncryptAlgorithm.Decrypt(string encryptedValue) {
            return InnerDecrypt(encryptedValue);
        }

        protected abstract string InnerDecrypt(string encryptedValue);
    }
}