/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Globalization;
using Newtonsoft.Json;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform.NewRuntime {
    public class LongConverter : JsonConverter {
        public override bool CanConvert(Type objectType) {
            return objectType == typeof(long?);
        }

        public override bool CanRead { get { return false; } }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
            throw new NotImplementedException("write only serializer");
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
            var valueString = ((long?)value).Value.ToString(CultureInfo.InvariantCulture);

            serializer.Serialize(writer, valueString);
        }
    }
}