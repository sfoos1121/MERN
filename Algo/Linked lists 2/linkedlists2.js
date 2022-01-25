class SLL {
    // constructor, other methods, removed for brevity
    display() {
        var listStr ="",
        if (this.head == null) {
            return "";
        }

        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null) {
            listString += "," + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}





