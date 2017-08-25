def rot13(message)
    alphabet = ('A'..'Z').to_a

    message = message.split("").map { |i|
      if i =~ /[a-zA-Z]/
        if i == i.downcase
          alphabet[alphabet.index(i.upcase)-13].downcase
        else
          alphabet[alphabet.index(i.upcase)-13]
        end
      else
      i
      end
      }
    message.join("")
end
