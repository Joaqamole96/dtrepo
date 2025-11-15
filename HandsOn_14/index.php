<?php
$data = file_get_contents('data.json');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke & Trivia Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Joaqamole's Funny Business</h1>
        <p>A fun way to test your knowledge or get a quick laugh!</p>
    </header>

    <div class="content-container">
        <main>
            <div class="generator-card">
                <span id="item-number" class="item-number">#0</span>
                <h2 id="card-title">Welcome!</h2>
                <p id="content-setup" class="content-text">Click the button below to generate a random question, riddle, or fact.</p>
                <p id="content-punchline" class="content-text hidden"></p>
                <div class="button-group">
                    <button id="generate-btn">Generate Content</button>
                    <button id="reveal-btn" class="hidden">Reveal Answer/Punchline</button>
                </div>
            </div>
        </main>

        <aside>
            <h3>Submit Your Content</h3>
            <form id="submission-form" class="submission-form">
                <label for="input-category">Category</label>
                <select id="input-category">
                    <option value="joke">Joke</option>
                    <option value="riddle">Riddle</option>
                    <option value="computer science">Computer Science</option>
                    <option value="math">Math</option>
                    <option value="engineering">Engineering</option>
                    <option value="philippine history">Philippine History</option>
                    <option value="law">Law</option>
                    <option value="physics">Physics</option>
                    <option value="human anatomy">Human Anatomy</option>
                    <option value="botany">Botany</option>
                    <option value="literature">Literature</option>
                </select>

                <label for="input-question">Question / Setup</label>
                <input type="text" id="input-question" required>

                <label for="input-answer">Answer / Punchline</label>
                <input type="text" id="input-answer" required>

                <button type="submit" id="submit-btn">Submit Idea</button>
                <p id="submit-message" class="hidden">Thank you for your submission!</p>
            </form>
        </aside>
    </div>

    <footer>
        <p>&copy; 2025 Direcho Trabaho Web Development with JavaScript | Designed by Joaquin Luis Guevarra</p>
    </footer>

    <script>
        const JOKE_TRIVIA_DATA = <?php echo $data; ?>;
    </script>
    <script src="script.js"></script>
</body>
</html>