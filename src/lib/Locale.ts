export default class Locale {
  private language: string;

  private strings: { [key: string]: string };

  public constructor(language: string) {
    this.language = language;
    this.strings = JSON.parse(Locale.fetchLanguageFile(this.language));
  }

  public translate(input: string, params: Object = {}): string {
    let translation: string = input;
    // If the input is a property of the data object
    if (input in this.strings) {
      translation = this.strings[input];
    }
    // Replace all parameters in the result
    Object.entries(params).forEach(([key, value]) => {
      translation = translation.replaceAll(`:${key}`, value);
    });

    return translation;
  }

  public trans(input: string, params: Object = {}): string {
    return this.translate(input, params);
  }

  public transChoice(input: string, count: number): string {
    let translation: string = input;
    // If the input is a property of the data object
    if (input in this.strings) {
      translation = this.strings[input];
    }
    const choices = translation.split('|');
    choices.forEach((choice) => {
      if (Locale.matchesChoice(choice, count)) {
        translation = Locale.extractChoiceText(choice);
      }
    });
    translation = translation.replaceAll(':count', `${count}`);

    return translation;
  }

  public static getCurrentBrowserLocale(): string {
    return navigator.language;
  }

  private static fetchLanguageFile(tag: string) : string {
    // Load a language file that matches the chosen language
    let data = '';
    // split the language into RFC5646 subtags
    const subtags = tag.split('-');
    // Try to load the most specific language file, make more generic if needed
    while (subtags.length > 0 && data === '') {
      // Rejoin the subtags to create the filename
      const filename = subtags.join('-');
      data = Locale.loadTextFileViaHTTPRequest(`./Assets/Lang/${filename}.json`);
      // Remove the last element from the array
      subtags.splice(-1, 1);
    }
    if (data === '') {
      data = '{}';
    }
    return data;
  }

  private static loadTextFileViaHTTPRequest(url: string): string {
    // Fetch the language file using an HTTP request
    const request = new XMLHttpRequest();

    request.open('GET', url, false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
      return request.responseText;
    }
    // Loading failed; return empty string
    return '';
  }

  private static matchesChoice(choice: string, amount: number): boolean {
    if (choice[0] === '{') {
      // Find the index of the first } character after the { character
      const endIndex = choice.indexOf('}');
      return Number(choice.substring(1, endIndex)) === amount;
    }
    if (choice[0] === '[') {
      // Find the index of the first ] character after the [ character
      const endIndex = choice.indexOf(']');
      // Extract the substring between [ and ]
      const options = choice.substring(1, endIndex).split(',');
      return amount >= Number(options[0]) && (options[1] === '*' || amount < Number(options[1]));
    }
    return false;
  }

  private static extractChoiceText(str: string): string {
    let endIndex = str.indexOf('}');
    if (str[0] === '[') {
      endIndex = str.indexOf(']');
    }
    return str.substring(endIndex + 2);
  }
}
