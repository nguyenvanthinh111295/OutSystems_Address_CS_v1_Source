/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.IO;

namespace OutSystems.Extensibility {

    public class DeploymentDescription {

        public DeploymentDescription(string name, FileInfo applicationPath) {
            this.Name = name;
            this.Path = applicationPath;
        }

        public string Name { get; private set; }
        public FileInfo Path { get; private set; }

        public virtual bool ShouldRedeploy() {
            return true;
        }
    }
}
