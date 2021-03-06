import * as jssha from 'jssha';
var Sha1Service = (function () {
    function Sha1Service() {
        this._jssha = jssha;
    }
    Sha1Service.prototype.getHash = function (key, text) {
        var shaObj = new this._jssha("SHA-1", "TEXT");
        shaObj.setHMACKey(key, "TEXT");
        shaObj.update(text);
        return shaObj.getHMAC("B64");
    };
    return Sha1Service;
}());
export { Sha1Service };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NoYTEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQjtJQUNDO1FBRVEsV0FBTSxHQUFnQixLQUFLLENBQUM7SUFGdEIsQ0FBQztJQUlmLDZCQUFPLEdBQVAsVUFBUSxHQUFVLEVBQUMsSUFBVztRQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDIn0=